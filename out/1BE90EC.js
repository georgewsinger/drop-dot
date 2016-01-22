goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13222__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13223__i = 0, G__13223__a = new Array(arguments.length -  0);
while (G__13223__i < G__13223__a.length) {G__13223__a[G__13223__i] = arguments[G__13223__i + 0]; ++G__13223__i;}
  args = new cljs.core.IndexedSeq(G__13223__a,0);
} 
return G__13222__delegate.call(this,args);};
G__13222.cljs$lang$maxFixedArity = 0;
G__13222.cljs$lang$applyTo = (function (arglist__13224){
var args = cljs.core.seq(arglist__13224);
return G__13222__delegate(args);
});
G__13222.cljs$core$IFn$_invoke$arity$variadic = G__13222__delegate;
return G__13222;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13225__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13226__i = 0, G__13226__a = new Array(arguments.length -  0);
while (G__13226__i < G__13226__a.length) {G__13226__a[G__13226__i] = arguments[G__13226__i + 0]; ++G__13226__i;}
  args = new cljs.core.IndexedSeq(G__13226__a,0);
} 
return G__13225__delegate.call(this,args);};
G__13225.cljs$lang$maxFixedArity = 0;
G__13225.cljs$lang$applyTo = (function (arglist__13227){
var args = cljs.core.seq(arglist__13227);
return G__13225__delegate(args);
});
G__13225.cljs$core$IFn$_invoke$arity$variadic = G__13225__delegate;
return G__13225;
})()
;

return null;
});
