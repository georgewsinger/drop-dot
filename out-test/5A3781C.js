goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__181847__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__181847 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__181848__i = 0, G__181848__a = new Array(arguments.length -  0);
while (G__181848__i < G__181848__a.length) {G__181848__a[G__181848__i] = arguments[G__181848__i + 0]; ++G__181848__i;}
  args = new cljs.core.IndexedSeq(G__181848__a,0);
} 
return G__181847__delegate.call(this,args);};
G__181847.cljs$lang$maxFixedArity = 0;
G__181847.cljs$lang$applyTo = (function (arglist__181849){
var args = cljs.core.seq(arglist__181849);
return G__181847__delegate(args);
});
G__181847.cljs$core$IFn$_invoke$arity$variadic = G__181847__delegate;
return G__181847;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__181850__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__181850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__181851__i = 0, G__181851__a = new Array(arguments.length -  0);
while (G__181851__i < G__181851__a.length) {G__181851__a[G__181851__i] = arguments[G__181851__i + 0]; ++G__181851__i;}
  args = new cljs.core.IndexedSeq(G__181851__a,0);
} 
return G__181850__delegate.call(this,args);};
G__181850.cljs$lang$maxFixedArity = 0;
G__181850.cljs$lang$applyTo = (function (arglist__181852){
var args = cljs.core.seq(arglist__181852);
return G__181850__delegate(args);
});
G__181850.cljs$core$IFn$_invoke$arity$variadic = G__181850__delegate;
return G__181850;
})()
;

return null;
});
