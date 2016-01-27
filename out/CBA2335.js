goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34651__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34652__i = 0, G__34652__a = new Array(arguments.length -  0);
while (G__34652__i < G__34652__a.length) {G__34652__a[G__34652__i] = arguments[G__34652__i + 0]; ++G__34652__i;}
  args = new cljs.core.IndexedSeq(G__34652__a,0);
} 
return G__34651__delegate.call(this,args);};
G__34651.cljs$lang$maxFixedArity = 0;
G__34651.cljs$lang$applyTo = (function (arglist__34653){
var args = cljs.core.seq(arglist__34653);
return G__34651__delegate(args);
});
G__34651.cljs$core$IFn$_invoke$arity$variadic = G__34651__delegate;
return G__34651;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34654__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34654 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34655__i = 0, G__34655__a = new Array(arguments.length -  0);
while (G__34655__i < G__34655__a.length) {G__34655__a[G__34655__i] = arguments[G__34655__i + 0]; ++G__34655__i;}
  args = new cljs.core.IndexedSeq(G__34655__a,0);
} 
return G__34654__delegate.call(this,args);};
G__34654.cljs$lang$maxFixedArity = 0;
G__34654.cljs$lang$applyTo = (function (arglist__34656){
var args = cljs.core.seq(arglist__34656);
return G__34654__delegate(args);
});
G__34654.cljs$core$IFn$_invoke$arity$variadic = G__34654__delegate;
return G__34654;
})()
;

return null;
});
