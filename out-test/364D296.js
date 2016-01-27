goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__65276__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__65276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65277__i = 0, G__65277__a = new Array(arguments.length -  0);
while (G__65277__i < G__65277__a.length) {G__65277__a[G__65277__i] = arguments[G__65277__i + 0]; ++G__65277__i;}
  args = new cljs.core.IndexedSeq(G__65277__a,0);
} 
return G__65276__delegate.call(this,args);};
G__65276.cljs$lang$maxFixedArity = 0;
G__65276.cljs$lang$applyTo = (function (arglist__65278){
var args = cljs.core.seq(arglist__65278);
return G__65276__delegate(args);
});
G__65276.cljs$core$IFn$_invoke$arity$variadic = G__65276__delegate;
return G__65276;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__65279__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__65279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65280__i = 0, G__65280__a = new Array(arguments.length -  0);
while (G__65280__i < G__65280__a.length) {G__65280__a[G__65280__i] = arguments[G__65280__i + 0]; ++G__65280__i;}
  args = new cljs.core.IndexedSeq(G__65280__a,0);
} 
return G__65279__delegate.call(this,args);};
G__65279.cljs$lang$maxFixedArity = 0;
G__65279.cljs$lang$applyTo = (function (arglist__65281){
var args = cljs.core.seq(arglist__65281);
return G__65279__delegate(args);
});
G__65279.cljs$core$IFn$_invoke$arity$variadic = G__65279__delegate;
return G__65279;
})()
;

return null;
});
