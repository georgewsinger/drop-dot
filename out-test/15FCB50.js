goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24276__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24277__i = 0, G__24277__a = new Array(arguments.length -  0);
while (G__24277__i < G__24277__a.length) {G__24277__a[G__24277__i] = arguments[G__24277__i + 0]; ++G__24277__i;}
  args = new cljs.core.IndexedSeq(G__24277__a,0);
} 
return G__24276__delegate.call(this,args);};
G__24276.cljs$lang$maxFixedArity = 0;
G__24276.cljs$lang$applyTo = (function (arglist__24278){
var args = cljs.core.seq(arglist__24278);
return G__24276__delegate(args);
});
G__24276.cljs$core$IFn$_invoke$arity$variadic = G__24276__delegate;
return G__24276;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24279__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24280__i = 0, G__24280__a = new Array(arguments.length -  0);
while (G__24280__i < G__24280__a.length) {G__24280__a[G__24280__i] = arguments[G__24280__i + 0]; ++G__24280__i;}
  args = new cljs.core.IndexedSeq(G__24280__a,0);
} 
return G__24279__delegate.call(this,args);};
G__24279.cljs$lang$maxFixedArity = 0;
G__24279.cljs$lang$applyTo = (function (arglist__24281){
var args = cljs.core.seq(arglist__24281);
return G__24279__delegate(args);
});
G__24279.cljs$core$IFn$_invoke$arity$variadic = G__24279__delegate;
return G__24279;
})()
;

return null;
});
