goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13218__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13219__i = 0, G__13219__a = new Array(arguments.length -  0);
while (G__13219__i < G__13219__a.length) {G__13219__a[G__13219__i] = arguments[G__13219__i + 0]; ++G__13219__i;}
  args = new cljs.core.IndexedSeq(G__13219__a,0);
} 
return G__13218__delegate.call(this,args);};
G__13218.cljs$lang$maxFixedArity = 0;
G__13218.cljs$lang$applyTo = (function (arglist__13220){
var args = cljs.core.seq(arglist__13220);
return G__13218__delegate(args);
});
G__13218.cljs$core$IFn$_invoke$arity$variadic = G__13218__delegate;
return G__13218;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13221__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13222__i = 0, G__13222__a = new Array(arguments.length -  0);
while (G__13222__i < G__13222__a.length) {G__13222__a[G__13222__i] = arguments[G__13222__i + 0]; ++G__13222__i;}
  args = new cljs.core.IndexedSeq(G__13222__a,0);
} 
return G__13221__delegate.call(this,args);};
G__13221.cljs$lang$maxFixedArity = 0;
G__13221.cljs$lang$applyTo = (function (arglist__13223){
var args = cljs.core.seq(arglist__13223);
return G__13221__delegate(args);
});
G__13221.cljs$core$IFn$_invoke$arity$variadic = G__13221__delegate;
return G__13221;
})()
;

return null;
});
