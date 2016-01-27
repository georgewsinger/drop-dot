goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32279__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32280__i = 0, G__32280__a = new Array(arguments.length -  0);
while (G__32280__i < G__32280__a.length) {G__32280__a[G__32280__i] = arguments[G__32280__i + 0]; ++G__32280__i;}
  args = new cljs.core.IndexedSeq(G__32280__a,0);
} 
return G__32279__delegate.call(this,args);};
G__32279.cljs$lang$maxFixedArity = 0;
G__32279.cljs$lang$applyTo = (function (arglist__32281){
var args = cljs.core.seq(arglist__32281);
return G__32279__delegate(args);
});
G__32279.cljs$core$IFn$_invoke$arity$variadic = G__32279__delegate;
return G__32279;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32282__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32283__i = 0, G__32283__a = new Array(arguments.length -  0);
while (G__32283__i < G__32283__a.length) {G__32283__a[G__32283__i] = arguments[G__32283__i + 0]; ++G__32283__i;}
  args = new cljs.core.IndexedSeq(G__32283__a,0);
} 
return G__32282__delegate.call(this,args);};
G__32282.cljs$lang$maxFixedArity = 0;
G__32282.cljs$lang$applyTo = (function (arglist__32284){
var args = cljs.core.seq(arglist__32284);
return G__32282__delegate(args);
});
G__32282.cljs$core$IFn$_invoke$arity$variadic = G__32282__delegate;
return G__32282;
})()
;

return null;
});
