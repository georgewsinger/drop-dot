goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54703__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54704__i = 0, G__54704__a = new Array(arguments.length -  0);
while (G__54704__i < G__54704__a.length) {G__54704__a[G__54704__i] = arguments[G__54704__i + 0]; ++G__54704__i;}
  args = new cljs.core.IndexedSeq(G__54704__a,0);
} 
return G__54703__delegate.call(this,args);};
G__54703.cljs$lang$maxFixedArity = 0;
G__54703.cljs$lang$applyTo = (function (arglist__54705){
var args = cljs.core.seq(arglist__54705);
return G__54703__delegate(args);
});
G__54703.cljs$core$IFn$_invoke$arity$variadic = G__54703__delegate;
return G__54703;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54706__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54706 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54707__i = 0, G__54707__a = new Array(arguments.length -  0);
while (G__54707__i < G__54707__a.length) {G__54707__a[G__54707__i] = arguments[G__54707__i + 0]; ++G__54707__i;}
  args = new cljs.core.IndexedSeq(G__54707__a,0);
} 
return G__54706__delegate.call(this,args);};
G__54706.cljs$lang$maxFixedArity = 0;
G__54706.cljs$lang$applyTo = (function (arglist__54708){
var args = cljs.core.seq(arglist__54708);
return G__54706__delegate(args);
});
G__54706.cljs$core$IFn$_invoke$arity$variadic = G__54706__delegate;
return G__54706;
})()
;

return null;
});
