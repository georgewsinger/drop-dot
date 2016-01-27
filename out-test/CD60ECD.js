goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58751__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58751 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58752__i = 0, G__58752__a = new Array(arguments.length -  0);
while (G__58752__i < G__58752__a.length) {G__58752__a[G__58752__i] = arguments[G__58752__i + 0]; ++G__58752__i;}
  args = new cljs.core.IndexedSeq(G__58752__a,0);
} 
return G__58751__delegate.call(this,args);};
G__58751.cljs$lang$maxFixedArity = 0;
G__58751.cljs$lang$applyTo = (function (arglist__58753){
var args = cljs.core.seq(arglist__58753);
return G__58751__delegate(args);
});
G__58751.cljs$core$IFn$_invoke$arity$variadic = G__58751__delegate;
return G__58751;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58754__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58754 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58755__i = 0, G__58755__a = new Array(arguments.length -  0);
while (G__58755__i < G__58755__a.length) {G__58755__a[G__58755__i] = arguments[G__58755__i + 0]; ++G__58755__i;}
  args = new cljs.core.IndexedSeq(G__58755__a,0);
} 
return G__58754__delegate.call(this,args);};
G__58754.cljs$lang$maxFixedArity = 0;
G__58754.cljs$lang$applyTo = (function (arglist__58756){
var args = cljs.core.seq(arglist__58756);
return G__58754__delegate(args);
});
G__58754.cljs$core$IFn$_invoke$arity$variadic = G__58754__delegate;
return G__58754;
})()
;

return null;
});
