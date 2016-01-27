goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44587__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44587 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44588__i = 0, G__44588__a = new Array(arguments.length -  0);
while (G__44588__i < G__44588__a.length) {G__44588__a[G__44588__i] = arguments[G__44588__i + 0]; ++G__44588__i;}
  args = new cljs.core.IndexedSeq(G__44588__a,0);
} 
return G__44587__delegate.call(this,args);};
G__44587.cljs$lang$maxFixedArity = 0;
G__44587.cljs$lang$applyTo = (function (arglist__44589){
var args = cljs.core.seq(arglist__44589);
return G__44587__delegate(args);
});
G__44587.cljs$core$IFn$_invoke$arity$variadic = G__44587__delegate;
return G__44587;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44590__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44590 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44591__i = 0, G__44591__a = new Array(arguments.length -  0);
while (G__44591__i < G__44591__a.length) {G__44591__a[G__44591__i] = arguments[G__44591__i + 0]; ++G__44591__i;}
  args = new cljs.core.IndexedSeq(G__44591__a,0);
} 
return G__44590__delegate.call(this,args);};
G__44590.cljs$lang$maxFixedArity = 0;
G__44590.cljs$lang$applyTo = (function (arglist__44592){
var args = cljs.core.seq(arglist__44592);
return G__44590__delegate(args);
});
G__44590.cljs$core$IFn$_invoke$arity$variadic = G__44590__delegate;
return G__44590;
})()
;

return null;
});
