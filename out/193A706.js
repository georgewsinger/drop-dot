goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18966__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18967__i = 0, G__18967__a = new Array(arguments.length -  0);
while (G__18967__i < G__18967__a.length) {G__18967__a[G__18967__i] = arguments[G__18967__i + 0]; ++G__18967__i;}
  args = new cljs.core.IndexedSeq(G__18967__a,0);
} 
return G__18966__delegate.call(this,args);};
G__18966.cljs$lang$maxFixedArity = 0;
G__18966.cljs$lang$applyTo = (function (arglist__18968){
var args = cljs.core.seq(arglist__18968);
return G__18966__delegate(args);
});
G__18966.cljs$core$IFn$_invoke$arity$variadic = G__18966__delegate;
return G__18966;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18969__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18970__i = 0, G__18970__a = new Array(arguments.length -  0);
while (G__18970__i < G__18970__a.length) {G__18970__a[G__18970__i] = arguments[G__18970__i + 0]; ++G__18970__i;}
  args = new cljs.core.IndexedSeq(G__18970__a,0);
} 
return G__18969__delegate.call(this,args);};
G__18969.cljs$lang$maxFixedArity = 0;
G__18969.cljs$lang$applyTo = (function (arglist__18971){
var args = cljs.core.seq(arglist__18971);
return G__18969__delegate(args);
});
G__18969.cljs$core$IFn$_invoke$arity$variadic = G__18969__delegate;
return G__18969;
})()
;

return null;
});
