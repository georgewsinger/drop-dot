goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__74054__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__74054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74055__i = 0, G__74055__a = new Array(arguments.length -  0);
while (G__74055__i < G__74055__a.length) {G__74055__a[G__74055__i] = arguments[G__74055__i + 0]; ++G__74055__i;}
  args = new cljs.core.IndexedSeq(G__74055__a,0);
} 
return G__74054__delegate.call(this,args);};
G__74054.cljs$lang$maxFixedArity = 0;
G__74054.cljs$lang$applyTo = (function (arglist__74056){
var args = cljs.core.seq(arglist__74056);
return G__74054__delegate(args);
});
G__74054.cljs$core$IFn$_invoke$arity$variadic = G__74054__delegate;
return G__74054;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__74057__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__74057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74058__i = 0, G__74058__a = new Array(arguments.length -  0);
while (G__74058__i < G__74058__a.length) {G__74058__a[G__74058__i] = arguments[G__74058__i + 0]; ++G__74058__i;}
  args = new cljs.core.IndexedSeq(G__74058__a,0);
} 
return G__74057__delegate.call(this,args);};
G__74057.cljs$lang$maxFixedArity = 0;
G__74057.cljs$lang$applyTo = (function (arglist__74059){
var args = cljs.core.seq(arglist__74059);
return G__74057__delegate(args);
});
G__74057.cljs$core$IFn$_invoke$arity$variadic = G__74057__delegate;
return G__74057;
})()
;

return null;
});
