goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34393__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34393 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34394__i = 0, G__34394__a = new Array(arguments.length -  0);
while (G__34394__i < G__34394__a.length) {G__34394__a[G__34394__i] = arguments[G__34394__i + 0]; ++G__34394__i;}
  args = new cljs.core.IndexedSeq(G__34394__a,0);
} 
return G__34393__delegate.call(this,args);};
G__34393.cljs$lang$maxFixedArity = 0;
G__34393.cljs$lang$applyTo = (function (arglist__34395){
var args = cljs.core.seq(arglist__34395);
return G__34393__delegate(args);
});
G__34393.cljs$core$IFn$_invoke$arity$variadic = G__34393__delegate;
return G__34393;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34396__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34397__i = 0, G__34397__a = new Array(arguments.length -  0);
while (G__34397__i < G__34397__a.length) {G__34397__a[G__34397__i] = arguments[G__34397__i + 0]; ++G__34397__i;}
  args = new cljs.core.IndexedSeq(G__34397__a,0);
} 
return G__34396__delegate.call(this,args);};
G__34396.cljs$lang$maxFixedArity = 0;
G__34396.cljs$lang$applyTo = (function (arglist__34398){
var args = cljs.core.seq(arglist__34398);
return G__34396__delegate(args);
});
G__34396.cljs$core$IFn$_invoke$arity$variadic = G__34396__delegate;
return G__34396;
})()
;

return null;
});
