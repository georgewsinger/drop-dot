goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__104276__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__104276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__104277__i = 0, G__104277__a = new Array(arguments.length -  0);
while (G__104277__i < G__104277__a.length) {G__104277__a[G__104277__i] = arguments[G__104277__i + 0]; ++G__104277__i;}
  args = new cljs.core.IndexedSeq(G__104277__a,0);
} 
return G__104276__delegate.call(this,args);};
G__104276.cljs$lang$maxFixedArity = 0;
G__104276.cljs$lang$applyTo = (function (arglist__104278){
var args = cljs.core.seq(arglist__104278);
return G__104276__delegate(args);
});
G__104276.cljs$core$IFn$_invoke$arity$variadic = G__104276__delegate;
return G__104276;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__104279__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__104279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__104280__i = 0, G__104280__a = new Array(arguments.length -  0);
while (G__104280__i < G__104280__a.length) {G__104280__a[G__104280__i] = arguments[G__104280__i + 0]; ++G__104280__i;}
  args = new cljs.core.IndexedSeq(G__104280__a,0);
} 
return G__104279__delegate.call(this,args);};
G__104279.cljs$lang$maxFixedArity = 0;
G__104279.cljs$lang$applyTo = (function (arglist__104281){
var args = cljs.core.seq(arglist__104281);
return G__104279__delegate(args);
});
G__104279.cljs$core$IFn$_invoke$arity$variadic = G__104279__delegate;
return G__104279;
})()
;

return null;
});
