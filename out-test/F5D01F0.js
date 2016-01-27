goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22225__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22226__i = 0, G__22226__a = new Array(arguments.length -  0);
while (G__22226__i < G__22226__a.length) {G__22226__a[G__22226__i] = arguments[G__22226__i + 0]; ++G__22226__i;}
  args = new cljs.core.IndexedSeq(G__22226__a,0);
} 
return G__22225__delegate.call(this,args);};
G__22225.cljs$lang$maxFixedArity = 0;
G__22225.cljs$lang$applyTo = (function (arglist__22227){
var args = cljs.core.seq(arglist__22227);
return G__22225__delegate(args);
});
G__22225.cljs$core$IFn$_invoke$arity$variadic = G__22225__delegate;
return G__22225;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22228__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22229__i = 0, G__22229__a = new Array(arguments.length -  0);
while (G__22229__i < G__22229__a.length) {G__22229__a[G__22229__i] = arguments[G__22229__i + 0]; ++G__22229__i;}
  args = new cljs.core.IndexedSeq(G__22229__a,0);
} 
return G__22228__delegate.call(this,args);};
G__22228.cljs$lang$maxFixedArity = 0;
G__22228.cljs$lang$applyTo = (function (arglist__22230){
var args = cljs.core.seq(arglist__22230);
return G__22228__delegate(args);
});
G__22228.cljs$core$IFn$_invoke$arity$variadic = G__22228__delegate;
return G__22228;
})()
;

return null;
});
