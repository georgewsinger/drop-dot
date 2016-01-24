goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32323__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32324__i = 0, G__32324__a = new Array(arguments.length -  0);
while (G__32324__i < G__32324__a.length) {G__32324__a[G__32324__i] = arguments[G__32324__i + 0]; ++G__32324__i;}
  args = new cljs.core.IndexedSeq(G__32324__a,0);
} 
return G__32323__delegate.call(this,args);};
G__32323.cljs$lang$maxFixedArity = 0;
G__32323.cljs$lang$applyTo = (function (arglist__32325){
var args = cljs.core.seq(arglist__32325);
return G__32323__delegate(args);
});
G__32323.cljs$core$IFn$_invoke$arity$variadic = G__32323__delegate;
return G__32323;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32326__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32327__i = 0, G__32327__a = new Array(arguments.length -  0);
while (G__32327__i < G__32327__a.length) {G__32327__a[G__32327__i] = arguments[G__32327__i + 0]; ++G__32327__i;}
  args = new cljs.core.IndexedSeq(G__32327__a,0);
} 
return G__32326__delegate.call(this,args);};
G__32326.cljs$lang$maxFixedArity = 0;
G__32326.cljs$lang$applyTo = (function (arglist__32328){
var args = cljs.core.seq(arglist__32328);
return G__32326__delegate(args);
});
G__32326.cljs$core$IFn$_invoke$arity$variadic = G__32326__delegate;
return G__32326;
})()
;

return null;
});
